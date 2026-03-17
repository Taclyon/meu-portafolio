import "/src/styles/componentes-reutilizaveis/downloadPDF.css";
const DownloadButton = ({ file, filename, children }) => {
  return (
    <button className="btn-primary">
    <a
      href={file}
      download={filename}
      >
      {children}
    </a>
   </button>
  );
};

export default DownloadButton;