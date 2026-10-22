type PdfViewerProps = {
    url: string;
};

export default function PdfViewer(props: PdfViewerProps): JSX.Element {
    const url = props.url;
    return (
        <iframe
        src={url}
        style={{
        border: 0,
        width: "100%",
        height: "800px",
        }}
            >
        <p>
        スライド：
        <a href={url}>
            {url}
        </a>
        </p>
    </iframe>
    );
}
