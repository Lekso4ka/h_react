import React, { useEffect, useRef, useState } from "react";
import { useT } from "../../Ctx";
import { Modal } from "./style";

const CalendarIcon = () => (
    <svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 25" fill="none" aria-hidden>
        <rect x="0.5" y="3.5" width="21" height="21" stroke="#FFF"/>
        <rect x="2" y="0" width="4" height="5" fill="#FFF"/>
        <rect x="16" y="0" width="4" height="5" fill="#FFF"/>
        <rect y="7" width="22" height="1" fill="#FFF"/>
        <text x="11" y="20" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="Manrope, sans-serif" fontWeight="500">17</text>
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
            payload[field.name] = form.elements[field.name]?.value.trim() ?? "";
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
                    <rect width="34" height="34" fill="#2F3034"/>
                    <path
                        d="M11 23L15.8023 16.9333L11.1047 11H13.5698L17.0116 15.4L20.4186 11H22.8837L18.186 16.9333L23 23H20.5233L17.0116 18.4667L13.4767 23H11Z"
                        fill="#FFF6F0"
                    />
                </svg>
                <h3>{title}</h3>
                <form ref={formRef} className={sent ? "sent" : ""} onSubmit={formHandler}>
                    <div className="pane">
                        <div className="pane-inner">
                            <div className="fields">
                                {fields.map((field) => (
                                    <label key={field.name} className={`field${field.type === "date" ? " date-field" : ""}`}>
                                        <span>{field.label}</span>
                                        {field.readOnly ? (
                                            <input
                                                type="text"
                                                name={field.name}
                                                value={values[field.name] ?? ""}
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                type={field.type || "text"}
                                                name={field.name}
                                                required={Boolean(field.required)}
                                                min={field.type === "number" ? "1" : undefined}
                                                inputMode={field.type === "number" ? "numeric" : undefined}
                                            />
                                        )}
                                        {field.type === "date" && <CalendarIcon/>}
                                    </label>
                                ))}
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
                                        name={file.name}
                                        accept={file.accept}
                                        hidden
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
                            {t("consent")} <a href="/policy">{t("consentLink")}</a> {t("consentMid")} <a href="/policy">{t("policyLink")}</a>{t("consentEnd")}
                        </span>
                    </label>
                    <button type="submit" disabled={sent || sending} className={sent ? "sent" : ""}>
                        {sent ? t("sent") : t("send")}
                    </button>
                    <p className="required-note">{t("requiredFields")}</p>
                </form>
            </div>
        </Modal>
    );
};
