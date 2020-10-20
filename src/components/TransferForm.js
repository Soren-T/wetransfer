import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';

// this form data is not functional, but would be responsibe for email verfication.
// email verification is required before any files may be tranfered.
function TransferForm() {
  return (
    <Form>
      <Form.Field
        control={Input}
        placeholder="Email to" />
      <Form.Field
        control={Input}
        placeholder="Your email" />        
      <Form.Field 
        control={TextArea} 
        placeholder='Message' />
    </Form>
  );
}

export default TransferForm;
