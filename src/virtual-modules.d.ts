declare module "virtual:spaghetti-vibes-listing" {
  type SpaghettiVibesItem = {
    name: string;
    file: string;
    url: string;
  };

  type SpaghettiVibesListing = {
    generatedAt: string;
    groups: Record<string, SpaghettiVibesItem[]>;
  };

  const listing: SpaghettiVibesListing;
  export default listing;
}
