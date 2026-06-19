import styled from '@emotion/styled';

export const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({h}) => h ? h : "100%"};
    overflow: hidden;
    z-index: -1;
`;

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: ${ ({ active }) => active ? 1 : 0 };
    transition: opacity 0.8s ease-in-out;
    z-index: ${ ({ active }) => active ? 1 : 0 };
`;

export const VideoSt = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;