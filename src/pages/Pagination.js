import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({filterByPage}) {
    return (
        <Stack  spacing={2} sx={{ py: 3 }} style={{alignItems: 'center'}}>
            <Pagination onChange={pageChanged} count={10} shape="rounded" />
        </Stack>
    );

    function pageChanged(e, selectedPage) {
        filterByPage(selectedPage)
    }
}
