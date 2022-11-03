import { Center, Spinner } from "native-base";

export function Loading({}) {
  return (
    <Center flex={1} bg="grey.900">
      <Spinner color="yellow.500" accessibilityLabel="Loading screen" />
    </Center>
  );
}
