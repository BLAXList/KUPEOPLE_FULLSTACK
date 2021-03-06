import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';


export class CreateThreadDto {

    userID: ObjectID; 
    @IsString()
    topic: string;
    @IsArray()
    tag_arr : string[];
    @IsString()
    content: string;
    @IsArray()
    image_arr: [string, number][]; 
    @IsArray()
    up_vote_arr: ObjectID[];
    @IsArray()
    down_vote_arr: ObjectID[];
    @IsInt()
    up_vote_count: number;
    @IsInt()
    down_vote_count: number;
    @IsInt()
    number_of_comment: number;
    @IsDate()
    date_create: Date;
    @IsDate()
    date_lastedit?: Date;
    @IsDate()
    date_delete?: Date;
    @IsBoolean()
    isanonymous: boolean;
}