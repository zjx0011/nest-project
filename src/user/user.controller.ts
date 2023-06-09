import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('findOne')
    findUser(@Query() query: any) {
        return this.userService.findUser(query.sid);
    }

    @Post('set')
    setUser(@Body() body: any, @Query() query: any) {
        return this.userService.setUser(query.sid, body);
    }

    @Put(':sid')
    updateUser(@Param('sid') sid: string, @Body() body: any) {
        return this.userService.updateUser(sid, body);
    }

    @Delete(':sid')
    deleteUser(@Param('sid') sid: string) {
        return this.userService.deleteUser(sid)
    }
}