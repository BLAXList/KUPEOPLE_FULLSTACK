import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateChat_messageDto{
    userID:ObjectID;
    chatroomID:ObjectID;
    @IsString()
    message:string;
    
    chat_read_arr: [ObjectID, Date][];
    @IsInt()
    readnum:number;
    @IsDate()
    date_create:Date;
    @IsDate()
    date_delete:Date;
    //hello
}