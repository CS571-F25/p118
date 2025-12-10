function ColorPalette({ colors }) {
  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <div className="d-flex gap-1 flex-wrap" role="list" aria-label="Color palette">
      {colors.map((color, index) => (
        <div
          key={index}
          role="listitem"
          className="rounded-circle border"
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: color.hex || color,
            cursor: 'pointer'
          }}
          title={color.name || color}
          aria-label={`Color: ${color.name || color}`}
        />
      ))}
    </div>
  );
}

export default ColorPalette;
