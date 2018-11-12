import { useEffect } from "react";

interface Props {
  onEffect: () => void | (() => void);
}

export const onMount = ({ onEffect }: Props) => {
  useEffect(onEffect, []);

  return null;
};
