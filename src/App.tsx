import React from "react";
import "./styles/index.css";

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{
        padding: "100px",
        border: "12px solid",
        borderColor: "var(--colorWarning700)",
      }}
    >
      <p style={{ color: "var(--colorBlueDark800)" }}>
        This is a paragraph with color defined as --colorBlueDark800.
      </p>
      <header
        className="typographyDisplayDefault"
        style={{ backgroundColor: "var(--colorColorOverlay)" }}
      >
        Header
      </header>
      <main className="typographyBodyMedium">
        <p>This is a simple body text using the bodyMedium typography style.</p>
        {/* Ajout de la marge basse au bouton */}
        <button
          style={{
            boxShadow: "var(--shadowFocusPrimary)",
            marginBottom: "20px",
          }}
        >
          Mon Bouton
        </button>
      </main>

      <footer
        className="typographySubtextCaption"
        style={{
          backgroundColor: "var(--colorSecondary800)",
          color: "var(--colorFgWeak)",
          padding: "16px",
        }}
      >
        Footer
      </footer>
    </div>
  );
};

export default App;
