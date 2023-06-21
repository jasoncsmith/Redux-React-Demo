import React, { useState } from 'react';

export function usePopover(initialMessage: string) {
    const [anchorElPopOver, setAnchorElPopOver] = useState<HTMLElement | null>(
        null
    );
    const [popOverText, setPopOverText] = useState<string>(initialMessage);

    function handlePopoverOpen(
        event: React.MouseEvent<HTMLElement>,
        msg: string
    ) {
        setAnchorElPopOver(event.currentTarget);
        if (msg) {
            setPopOverText(msg);
        }
    }

    function handlePopoverClose() {
        setAnchorElPopOver(null);
    }

    const isPopOverOpen = !!anchorElPopOver;

    return {
        popOverText,
        isPopOverOpen,
        anchorElPopOver,
        handlePopoverOpen,
        handlePopoverClose,
    };
}
