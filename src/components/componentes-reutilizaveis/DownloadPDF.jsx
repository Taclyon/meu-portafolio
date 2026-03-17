import "/src/styles/componentes-reutilizaveis/downloadPDF.css";
const DownloadButton = ({ file, filename, children }) => {
  return (
    <a
      className="btn-primary"
      href={file}
      download={filename}
      >
      {children}
    </a>
  );
};

export default DownloadButton;