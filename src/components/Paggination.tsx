import { FC } from "react";
import { Button, ButtonGroup, Select, Stack, Text } from "@chakra-ui/react";
import { RESULTS_PER_PAGE } from "../constants";

type PagginationProps = {
  total: number;
  page: number;
  onPageChange: (page: number) => void;
};

const Paggination: FC<PagginationProps> = ({ total, page, onPageChange }) => {
  const pageCount = Math.ceil(total / RESULTS_PER_PAGE);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {pageCount < 10 ? (
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
      ) : (
        <Select
          value={page}
          size="sm"
          borderRadius={4}
          w="16"
          placeholder="Select page"
          onChange={(e) => onPageChange(parseInt(e.target.value))}
        >
          {Array(pageCount)
            .fill("_")
            .map((i, k) => (
              <option key={k} value={k + 1}>
                {k + 1}
              </option>
            ))}
        </Select>
      )}
      <Text size="xs" textAlign="right" minW="32">
        Total results: {total}
      </Text>
    </Stack>
  );
};

export default Paggination;
