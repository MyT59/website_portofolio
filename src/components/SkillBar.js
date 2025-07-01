import './SkillBar.css';

function SkillBar({ skill, level }) {
  return (
    <div className="skill-bar">
      <span className="skill-name">{skill}</span>
      <div className="bar-background">
        <div className="bar-fill" style={{ width: level }}></div>
      </div>
    </div>
  );
}

export default SkillBar;