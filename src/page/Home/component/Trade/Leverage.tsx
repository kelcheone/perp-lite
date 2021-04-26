import {
    Box,
    FormControl,
    FormHelperText,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
} from "@chakra-ui/react"
import SmallFormLabel from "component/SmallFormLabel"
import React, { useCallback, useMemo } from "react"
import { Trade } from "page/Home/container/trade"

function Leverage() {
    const { side, leverage, setLeverage } = Trade.useContainer()

    const handleOnChange = useCallback(
        (value: number) => {
            if (value !== leverage) {
                setLeverage(value)
            }
        },
        [leverage, setLeverage],
    )

    return useMemo(
        () => (
            <FormControl id="leverages">
                <SmallFormLabel>Leverages</SmallFormLabel>
                <Box px={10} pt={4} pb={2} bg="blackAlpha.50" borderRadius="xl">
                    <Slider
                        onChange={handleOnChange}
                        defaultValue={3}
                        min={1}
                        max={10}
                        step={0.5}
                        colorScheme={side === 1 ? "green" : "red"}
                    >
                        <SliderTrack bg="gray.300">
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb
                            _active={{
                                userSelect: "none",
                                pb: ["50px", 0],
                                pt: ["6px", 0],
                                height: ["88px", "32px"],
                                transform: ["translateY(-70px)", "translateY(-50%)"],
                            }}
                            h={8}
                            w={12}
                            bg={side === 1 ? "green.50" : "red.50"}
                        >
                            <Text fontSize="sm" fontWeight="bold" color={side === 1 ? "green.600" : "red.600"}>
                                {leverage}×
                            </Text>
                        </SliderThumb>
                    </Slider>
                </Box>
                <FormHelperText>Up to 10×</FormHelperText>
            </FormControl>
        ),
        [handleOnChange, leverage, side],
    )
}

export default Leverage
