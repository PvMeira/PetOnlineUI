import React, { useState, useRef } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const UploadField = (props) => {
  const { label, accept, handleUpload, type } = props;
  const [name, setName] = useState("");
  const inputField = useRef(null);

  const loadBase64 = async (file) => {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  const handleUploadLocal = async () => {
    try {
      if (!inputField.current.files || inputField.current.files.length === 0) {
        return;
      }
      const file = inputField.current.files[0];
      const name = inputField.current.files[0].name.toLowerCase();
      setName(name);
      if (file.size > 5242880) {
        throw new Error("Max size is  5MB.");
      }
      const result = await loadBase64(file).catch((e) => {
        throw new Error("Error");
      });
      const document = { file: result, name };
      handleUpload && handleUpload(document, type);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <TextField
        fullWidth
        id='fieldUpload'
        label={label}
        variant='outlined'
        disabled
        value={name}
        className='document-text-field'
        error={props.error}
        helperText={props.helperText}
        InputProps={{
          style: { cursor: "pointer" },
          endAdornment: (
            <InputAdornment position='end'>
              <CloudDownloadIcon />
            </InputAdornment>
          ),
        }}
        onClick={() => document.getElementById(`inputFile`).click()}
      />
      <input
        id='inputFile'
        type='file'
        ref={inputField}
        accept={accept}
        style={{ display: "none" }}
        name='documentImage'
        onChange={handleUploadLocal}
      />
    </div>
  );
};

export default UploadField;
