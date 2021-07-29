import * as React from 'react';
import { FC, useContext } from 'react';

interface DashCardProps {
    tags: string[];
    title: string;
    description: string;
    author: string;
}

const DashCard: FC<DashCardProps> = ({ tags, title, description, author }) => {
    return(
        <>
        </>
    );
};

export default DashCard;