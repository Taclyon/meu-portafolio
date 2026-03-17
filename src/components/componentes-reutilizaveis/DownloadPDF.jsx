import "/src/styles/componentes-reutilizaveis/downloadPDF.css";
const DownloadButton = ({ file, filename, children }) => {
  return (
    <a
      href={file}
      download={filename}
      className="btn-cv"
    >
      {children}
    </a>
  );
};

export default DownloadButton;