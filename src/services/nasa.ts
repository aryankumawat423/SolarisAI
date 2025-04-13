/**
 * Represents the NASA solar data.
 */
export interface NasaSolarData {
  /**
   * The optimal tilt angle for the solar panel.
   */
  optimalTilt: number;
  /**
   * The expected energy gain.
   */
  energyGain: number;
}

/**
 * Retrieves NASA solar data for a given location.
 *
 * @param latitude The latitude of the location.
 * @param longitude The longitude of the location.
 * @returns A promise that resolves to a NasaSolarData object containing the optimal tilt angle and energy gain.
 */
export async function getNasaSolarData(
  latitude: number,
  longitude: number
): Promise<NasaSolarData> {
  // TODO: Implement this by calling the NASA API.

  return {
    optimalTilt: 30,
    energyGain: 0.85,
  };
}
