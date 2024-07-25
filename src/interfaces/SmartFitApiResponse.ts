import { Location } from "./Location";

export interface SmartFitApiResponse {
  current_country_id: number;
  locations: Location[];
  wp_total: number;
  total: number;
  success: boolean;
}
