import React from 'react'
class ContactUsErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
  
  render() {
    let errorElement;
    if (this.state.errorInfo)
      errorElement = [<p className="contact_us_error paper_wrap content_wrap"><span>Notice: Contact us element reported an error.</span></p>]
    return [this.props.children, errorElement];
  }  
}

export default ContactUsErrorBoundary