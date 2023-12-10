export default function wait(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
