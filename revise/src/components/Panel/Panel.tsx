interface PanelProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}

const Panel = ({ title, children, isActive, onShow}: PanelProps) => {
  return (
    <section className="panel">
      <h4>{title}</h4>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

export default Panel;