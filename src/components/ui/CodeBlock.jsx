import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';

const CodeBlock = ({ children, language = 'javascript', className = '' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <pre className={`language-${language} !m-0`}>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
