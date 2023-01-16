import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileIndicatorComponent from "./MobileIndicator";

const MobileIndicatorContainer = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
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

  return isMobile ? (
    children
  ) : (
    <MobileIndicatorComponent></MobileIndicatorComponent>
  );
};

export default MobileIndicatorContainer;
