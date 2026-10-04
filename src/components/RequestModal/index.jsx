import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useT } from "../../Ctx";
import { Modal } from "./style";
import { handlePhoneBlur, handlePhoneFocus, handlePhoneInput } from "../../utils/phoneMask";
import { armAutofillSubmit, EMAIL_PATTERN, fieldDomName, lockAutofill, noAutofillProps, readField, relockAutofill, unlockAutofill } from "../../utils/noAutofill";

const CalendarIcon = () => (
    //<svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 25" fill="none" aria-hidden>
    //    <rect x="0.5" y="3.5" width="21" height="21" stroke="#FFF"/>
    //    <rect x="2" y="0" width="4" height="5" fill="#FFF"/>
    //    <rect x="16" y="0" width="4" height="5" fill="#FFF"/>
    //    <rect y="7" width="22" height="1" fill="#FFF"/>
    //    <text x="11" y="20" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="Manrope, sans-serif" fontWeight="500">17</text>
    //</svg>
    <svg className="calendar-icon" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.28" y="2.92063" width="18.44" height="18.8" fill="#FFF6F0" stroke="#FFF6F0" strokeWidth="0.56"/>
        <rect y="6.16016" width="19" height="0.88" fill="#565861"/>
        <rect x="13.8163" width="3.45455" height="4.4" fill="#FFF6F0"/>
        <rect x="1.72513" width="3.45455" height="4.4" fill="#FFF6F0"/>
        <path
            d="M6.90344 17.5605V12.2365L5.71104 12.9625V11.9373L6.90344 11.2245H7.84064V17.5605H6.90344ZM9.84154 17.5605L12.0679 12.1001H9.24754V11.2245H13.0579V12.1001L10.8359 17.5605H9.84154Z"
            fill="#565861"/>
    </svg>

);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" aria-hidden>
        <rect x="17" y="6" width="2" height="24" fill="#FFF6F0"/>
        <rect x="6" y="17" width="24" height="2" fill="#FFF6F0"/>
    </svg>
);

export const RequestModal = ({
    active,
    onClose,
    title,
    successMessage,
    source,
    fields = [],
    values = {},
    file,
    extraPayload = {},
    lockBody = true,
    zIndex,
}) => {
    const t = useT();
    const formRef = useRef(null);
    const fileRef = useRef(null);
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [fileName, setFileName] = useState("");
    const [fileError, setFileError] = useState("");

    useEffect(() => {
        if (!lockBody) return;
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = null;
        }
        return () => {
            document.body.style.overflow = null;
        };
    }, [active, lockBody]);

    useEffect(() => {
        if (active) return;
        setSent(false);
        setSending(false);
        setFileName("");
        setFileError("");
        formRef.current?.reset();
        relockAutofill(formRef.current);
        if (fileRef.current) fileRef.current.value = "";
    }, [active]);

    const onFileChange = (e) => {
        const selected = e.target.files?.[0];
        setFileError("");
        if (!selected) {
            setFileName("");
            return;
        }
        const isPdf = selected.type === "application/pdf" || selected.name.toLowerCase().endsWith(".pdf");
        if (file.accept && !isPdf) {
            setFileError(t("pdfOnly"));
            setFileName("");
            e.target.value = "";
            return;
        }
        if (file.maxSize && selected.size > file.maxSize) {
            setFileError(t("fileTooBig"));
            setFileName("");
            e.target.value = "";
            return;
        }
        setFileName(selected.name);
    };

    const formHandler = async (e) => {
        e.preventDefault();
        if (sent || sending) return;
        const form = e.currentTarget;
        if (form.elements.consent && !form.elements.consent.checked) return;

        const payload = { source, ...extraPayload };
        fields.forEach((field) => {
            if (field.readOnly) {
                payload[field.name] = values[field.name] ?? "";
                return;
            }
            payload[field.name] = readField(form, field.name).trim();
        });

        const selectedFile = file ? fileRef.current?.files?.[0] : null;
        setSending(true);
        try {
            let res;
            if (selectedFile) {
                const body = new FormData();
                Object.entries(payload).forEach(([key, value]) => {
                    if (value != null && value !== "") body.append(key, value);
                });
                body.append(file.name, selectedFile);
                res = await fetch("/api/leads", { method: "POST", body });
            } else {
                res = await fetch("/api/leads", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
            }
            const json = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(json.error || "Ошибка отправки");
            }
            setSent(true);
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
        }
    };

    return (
        <Modal
            className={active ? "active" : ""}
            $zIndex={zIndex}
            onClick={(e) => e.currentTarget === e.target ? onClose() : null}
        >
            <div className="modal-content">
                <svg
                    className="x"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34 34"
                    fill="none"
                    onClick={onClose}
                >
                    <rect width="34" height="34" fill="#FFF6F0"/>
                    <path
                        d="M11 23L15.8023 16.9333L11.1047 11H13.5698L17.0116 15.4L20.4186 11H22.8837L18.186 16.9333L23 23H20.5233L17.0116 18.4667L13.4767 23H11Z"
                        fill="#1C1C1C"
                    />
                </svg>
                <h3>{title}</h3>
                <form
                    ref={formRef}
                    className={sent ? "sent" : ""}
                    autoComplete="off"
                    data-no-autofill="true"
                    data-form-type="other"
                    data-1p-ignore="true"
                    data-lpignore="true"
                    onSubmit={formHandler}
                    onKeyDown={armAutofillSubmit}
                >
                    <div className="pane">
                        <div className="pane-inner">
                            <div className="fields">
                                {fields.map((field) => {
                                    const kind = field.type || "text";
                                    const isPhone = kind === "tel";
                                    const isEmail = kind === "email";
                                    const skipLock = kind === "date" || kind === "number";
                                    return (
                                    <label key={field.name} className={`field${field.type === "date" ? " date-field" : ""}`}>
                                        <span>{field.label}</span>
                                        {field.readOnly ? (
                                            <input
                                                type="text"
                                                name={fieldDomName(field.name)}
                                                data-field={field.name}
                                                value={values[field.name] ?? ""}
                                                readOnly
                                                {...noAutofillProps}
                                            />
                                        ) : field.type === "textarea" ? (
                                            <textarea
                                                name={fieldDomName(field.name)}
                                                data-field={field.name}
                                                rows={1}
                                                required={Boolean(field.required)}
                                                {...noAutofillProps}
                                                ref={lockAutofill}
                                                onFocus={unlockAutofill}
                                            />
                                        ) : (
                                            <input
                                                type={isPhone || isEmail ? "text" : kind}
                                                name={fieldDomName(field.name)}
                                                data-field={field.name}
                                                required={Boolean(field.required)}
                                                min={kind === "number" ? "1" : undefined}
                                                inputMode={isPhone ? "tel" : isEmail ? "email" : kind === "number" ? "numeric" : undefined}
                                                pattern={isEmail ? EMAIL_PATTERN : undefined}
                                                {...noAutofillProps}
                                                ref={skipLock ? undefined : lockAutofill}
                                                onFocus={isPhone ? handlePhoneFocus : skipLock ? undefined : unlockAutofill}
                                                onInput={isPhone ? handlePhoneInput : undefined}
                                                onBlur={isPhone ? handlePhoneBlur : undefined}
                                            />
                                        )}
                                        {field.type === "date" && <CalendarIcon/>}
                                    </label>
                                    );
                                })}
                            </div>
                            {file && (
                                <div className="file-field">
                                    <span>{file.label}</span>
                                    <button
                                        type="button"
                                        className="file-box"
                                        onClick={() => fileRef.current?.click()}
                                    >
                                        {fileName ? <em>{fileName}</em> : <PlusIcon/>}
                                    </button>
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        name={fieldDomName(file.name)}
                                        accept={file.accept}
                                        hidden
                                        autoComplete="off"
                                        onChange={onFileChange}
                                    />
                                    <p className="file-hint">{file.hint}</p>
                                    {fileError && <p className="file-error">{fileError}</p>}
                                </div>
                            )}
                        </div>
                        {sent && (
                            <div className="success">
                                <p>{successMessage}</p>
                            </div>
                        )}
                    </div>
                    <label className="consent">
                        <input type="checkbox" name="consent" required={!sent}/>
                        <span>
                            {t("consent")} <Link to="/policy">{t("consentLink")}</Link> {t("consentMid")} <Link to="/policy">{t("policyLink")}</Link>{t("consentEnd")}
                        </span>
                    </label>
                    <button type="submit" disabled={sent || sending} className={sent ? "sent" : ""} onPointerDown={armAutofillSubmit}>
                        {sent ? t("sent") : t("send")}
                    </button>
                    <p className="required-note">{t("requiredFields")}</p>
                </form>
            </div>
        </Modal>
    );
};
