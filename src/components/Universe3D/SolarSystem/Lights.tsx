export const Lights = () => {
  return (
    <>
      <directionalLight position={[0, 50, 50]} intensity={1} />
      <ambientLight intensity={0.9} />
    </>
  );
};
