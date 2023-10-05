import { useSearchParams } from "react-router-dom";

export function useURLID() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return { id };
}
