import React, { useState } from 'react'
import OTPInput from 'react-otp-input';

const CustomOtpInput = () => {
    const [otp, setOtp] = useState([]);

    const handleChange = (otp) => {
        setOtp(otp);
      };
    const renderInput = (props, index) => {
        let bgColor = "#FFFFFF";
    
        if (otp[index]) {
          bgColor = "#EFF4EB";
        }
        return (
          <input
            {...props}
            style={{
              ...props.style,
              background: bgColor,
            }}
          />
        );
      };
  return (
    <OTPInput
    containerStyle={{
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    }}
    inputStyle={{
      width: "100%",
      height: "48px",
      borderRadius: "8px",
      padding: "14px 16px",
    }}
    value={otp}
    onChange={handleChange}
    numInputs={4}
    placeholder={["-", "-", "-", "-"]}
    renderInput={renderInput}
    className="my-opt-input"
  />
  )
}

export default CustomOtpInput
