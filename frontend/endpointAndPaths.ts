const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface useEndpointsProps {
  roomName?: string;
}

export function useEndpoints({ roomName = "" }: useEndpointsProps = {}) {
  return {
    joinRoomEndpoint: `${API_URL}/rooms/join`,
  };
}
export function usePaths() {
  return {
    authPath: `/auth`,
    invitePath: `invite`,
  };
}
