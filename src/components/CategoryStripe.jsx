export default function CategoryStripe({ title, color }) {
  const colors = {
    brown: "#693300",
    red: "#ff5252",
    yellow: "#ffd754",
    blue: "#4787ff",
    darkBlue: "#002a77",
    green: "#66fc66",
    darkGreen: "#006800",
    pink: "#ff6bb5",
    purple: "#800095",
    darkPurple: "#570064",
    aquagreen: "#36cc86"
  };

  return (
    <div
      style={{ backgroundColor: colors[color] }}
      className={`px-3 py-1 max-w-40 text-center rounded-md text-white text-lg`}
    >
      {title}
    </div>
  );
}
