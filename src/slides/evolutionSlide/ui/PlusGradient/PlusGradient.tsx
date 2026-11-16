export const PlusGradient = () => {
  const styles = `fixed inset-0 opacity-15 bg-[image:radial-gradient(circle,transparent_20%,#141414_20%,#141414_80%,transparent_80%,transparent),radial-gradient(circle,transparent_20%,#141414_20%,#141414_80%,transparent_80%,transparent),linear-gradient(#d4af37_2px,transparent_2px),linear-gradient(90deg,#d4af37_2px,#141414_2px)] bg-[length:50px_50px,50px_50px,25px_25px,25px_25px] bg-[position:0_0,25px_25px,0_-1px,-1px_0]`;
  return <div className={styles} />;
};
