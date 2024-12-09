import React from "react";
import { FaSignInAlt, FaClipboardCheck, FaQuestionCircle, FaCheckSquare, FaChartBar } from "react-icons/fa";

const TakeAssessment = () => {
  const steps = [
    {
      id: 1,
      title: "Sign In / Login",
      icon: <FaSignInAlt size={50} color="#ffffff" />,
      description: "Log in to your account to access the assessment.",
    },
    {
      id: 2,
      title: "Click Assessment",
      icon: <FaClipboardCheck size={50} color="#ffffff" />,
      description: "Navigate to the assessment section to begin.",
    },
    {
      id: 3,
      title: "Take Test",
      icon: <FaQuestionCircle size={50} color="#ffffff" />,
      description: "Answer the questions in the assessment.",
    },
    {
      id: 4,
      title: "Submit Test",
      icon: <FaCheckSquare size={50} color="#ffffff" />,
      description: "Submit your test for evaluation.",
    },
    {
      id: 5,
      title: "Get Report",
      icon: <FaChartBar size={50} color="#ffffff" />,
      description: "View your performance report.",
    },
  ];

  return (
    <div style={outerContainer}>
      <div style={containerStyle}>
        <h1 style={headerStyle}>Take Assessment</h1>
        <div style={stepsContainerStyle}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                ...stepStyle,
                backgroundColor: index % 2 === 0 ? "#035772" : "#046e8f",
              }}
            >
              <div style={iconContainer}>{step.icon}</div>
              <h3 style={titleStyle}>{step.title}</h3>
              <p style={descriptionStyle}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const outerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#eef6f9",
  padding: "20px",
};

const containerStyle = {
  textAlign: "center",
  maxWidth: "1200px",
  width: "100%",
};

const headerStyle = {
  fontSize: "32px",
  color: "#035772",
  marginBottom: "30px",
  fontWeight: "bold",
};

const stepsContainerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

const stepStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderRadius: "15px",
  color: "#ffffff",
  width: "200px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const iconContainer = {
  marginBottom: "15px",
};

const titleStyle = {
  fontSize: "18px",
  margin: "10px 0",
  fontWeight: "bold",
};

const descriptionStyle = {
  fontSize: "14px",
  textAlign: "center",
  lineHeight: "1.5",
};

stepStyle["&:hover"] = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
};

export default TakeAssessment;