import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Example() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    // mobile 쿼리로 인해 값이 바뀔 때 수행
    if (mobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobile]);

  return isMobile ? <p>this is mobile</p> : <p>this is NOt mobile</p>;
}
