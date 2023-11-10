import { FC } from "react";
import { Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import { RESULTS_PER_PAGE } from "../constants";

type PagginationProps = {
  total: number;
  page: number;
  onPageChange: (page: number) => void;
};

const Paggination: FC<PagginationProps> = ({
  total,
  page,
  onPageChange,
}) => {
  const pageCount = Math.ceil(total / RESULTS_PER_PAGE);

  return (
    <Stack direction="row" justifyContent="space-between">
      <ButtonGroup size="sm" spacing={1} flexWrap="wrap">
        {Array(pageCount)
          .fill("_")
          .map((i, k) => (
            <Button
              key={k}
              variant={page === k + 1 ? "solid" : "outline"}
              onClick={() => onPageChange(k + 1)}
            >
              {k + 1}
            </Button>
          ))}
      </ButtonGroup>
      <Text size="xs" textAlign="right" minW="32">
        Total results: {total}
      </Text>
    </Stack>
  );
};

export default Paggination;
