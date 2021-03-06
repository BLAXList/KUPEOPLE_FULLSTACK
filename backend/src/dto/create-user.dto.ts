import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateUserDto {
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsInt()
    exp: number;
    @IsString()
    rank: string;
    @IsArray()
    friend_arr: [ ObjectID, Date, Date, boolean][];// userID, date_add, date_remove(default null), isaccept
    @IsDate()
    numberfriends: number;
    @IsString()
    avatar_URL: string;
    @IsString()
    description: string;
    @IsDate()
    date_join: Date;
    @IsArray()
    ischatmember_arr: ObjectID[]; //chatroomID
}