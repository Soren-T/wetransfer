import React, { useEffect, useState } from 'react';
import { Button, Card, Divider } from 'semantic-ui-react';
import '../styles/upload.css';

import Spinner from './Spinner';
import TransferForm from './TransferForm';

function Upload() {
  // boolean to signal the completion of an upload.
  // This shows a relevant message and prompts the user to start over and transfer another file
  const [complete, setComplete] = useState(false);
  // this boolean triggers the upload spinner and upload message to be shown.
  const [upload, setUpload] = useState(false);
  // this boolean simulates a file being uploaded
  const [file, setFile] = useState(null);
  // this boolean controls the tranfer button and the bottom of the form.
  const [disableTransfer, setDisableTransfer] = useState(true);

  useEffect(() => {
    // when a file is uploaded allow the user to click the "transfer" button
    if (file) {
      setDisableTransfer(false);
    } else {
      setDisableTransfer(true);
    }
  }, [file]);

  function handleTransfer() {
    setUpload(true);
    // simulate upload time with this timeout function
    setTimeout(() => {
      setUpload(false);
      setComplete(true);
    }, 2000);
  }

  return (
    <Card className="upload">      
      {upload ? (
        <>
          <Spinner upload={upload} />
          <div className="upload-message">
            <h2>Tranferring...</h2>
            <p>
              Sending 11 files to 4 recipients
              <br />
              648 mb of 1.8 GB Uploaded
              <br />
              33 minuntes remaining
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="upload-file">
            {complete ? (
              <>
                <div className="upload-message">
                <h2>
                  All Done!
                </h2>
                <Button
                  content='Send Another'
                  onClick={() => {
                    setFile(null);
                    setComplete(false);
                  }} />
            </div>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    // this would prompt a file select window to open.
                    // on completion this variable would store the storage reference.
                    setFile(true)
                  }}
                  icon='add circle' />
                <div className="upload-message">
                  <h2>
                    Add your files
                  </h2>
                  <p>
                    Or select a folder
                  </p>
                </div>
              </>
            )}
          </div>
          <TransferForm />
        </>
      )}
      <Divider />
      <Button
        className="upload-button"
        disabled={disableTransfer}
        content={upload ? 'Cancel' : 'Transfer' }
        onClick={handleTransfer} />
    </Card>
  );
}

export default Upload;
