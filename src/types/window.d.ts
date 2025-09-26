declare global {
  interface Window {
    hj?: (type: string, data?: any) => void;
    vslVideoLoaded?: boolean;
    trackVideoPlay?: () => void;
    trackVideoProgress?: (currentTime: number, duration: number) => void;
    trackOfferClick?: (offerType: string) => void;
    showRestOfContentAfterDelay?: () => void;
    smartplayer?: {
      instances?: {
        [key: string]: any;
      };
    };
  }
}

export {};