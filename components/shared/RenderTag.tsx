import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

type TRenderTagProps = {
    _id: string;
    name: string;
    totalQuestions?: number;
    showCount?: boolean;
};
const RenderTag = (props: TRenderTagProps) => {
    return (
        <Link
            href={`/tags/${props._id}`}
            className="flex flex-row justify-between gap-2"
        >
            <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
                {props.name}
            </Badge>
            {props.showCount && (
                <p className="small-medium text-dark500_light700">
                    {props.totalQuestions}
                </p>
            )}
        </Link>
    );
};

export default RenderTag;
