export default function getColorForBlogPost(category: string): string {
  switch (category) {
    case "Sustainability":
      return "lime";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";

    default:
      return "fuchsia";
  }
}
