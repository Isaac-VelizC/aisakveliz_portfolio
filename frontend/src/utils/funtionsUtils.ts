export const getStatusText = (status: string) => {
  switch (status) {
    case "draft":
      return "Borrador";
    case "published":
      return "Publicado";
    case "planned":
      return "Planeado";
    default:
      return "Desconocido";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "draft":
      return "text-green-400 bg-green-400/10";
    case "published":
      return "text-yellow-400 bg-yellow-400/10";
    case "planned":
      return "text-blue-400 bg-blue-400/10";
    default:
      return "text-accentcolor bg-accentcolor/10";
  }
};

// Paleta de colores de acento
const accentColors = [
  "#00b7ff", // azul neón principal
  "#00ffff", // azul-cian brillante
  "#bd00ff", // neon purple
  "#ff00c3", // neon pink
];

// Función para obtener un gradient aleatorio
export function randomGradient(): string {
  const color1 = accentColors[Math.floor(Math.random() * accentColors.length)];
  let color2 = accentColors[Math.floor(Math.random() * accentColors.length)];

  // Evitar que color1 y color2 sean iguales
  while (color1 === color2) {
    color2 = accentColors[Math.floor(Math.random() * accentColors.length)];
  }

  return `from-[${color1}] to-[${color2}]`;
}
