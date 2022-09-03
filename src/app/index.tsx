import React, { FC } from "react";

type Props = { num: number };

const AppTest: FC<Props> = ({num}) => <h1>Total number: {num}</h1>;

export { AppTest };
