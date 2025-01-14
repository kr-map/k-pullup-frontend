export interface RegisteredMarker {
  latitude: number;
  longitude: number;
  markerId: number;
  description: string;
  address?: string;
}

export interface RegisteredMarkerRes {
  currentPage: number;
  markers: RegisteredMarker[];
  totalMarkers: number;
  totalPages: number;
  error?: string;
  message?: string;
}

const myRegisteredLocation = async ({
  pageParam,
  cookie,
}: {
  pageParam?: number;
  cookie?: string;
}): Promise<RegisteredMarkerRes> => {
  const isServer = typeof window === "undefined";

  const url = isServer ? process.env.NEXT_PUBLIC_BASE_URL : "/api/v1";
  const page = pageParam || 1;

  const response = await fetch(`${url}/markers/my?page=${page}&pageSize=7`, {
    headers: {
      Cookie: cookie || "",
    },
    cache: "no-store",
    credentials: "include",
  });

  const data: RegisteredMarkerRes = await response.json();

  return data;
};

export default myRegisteredLocation;
