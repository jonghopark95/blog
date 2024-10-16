import React, { ComponentProps } from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import type DocPaginatorType from '@theme/DocPaginator';

type Props = ComponentProps<typeof DocPaginatorType>;

export default function DocPaginatorWrapper(props: Props) {
  return <DocPaginator {...props} />;
}
