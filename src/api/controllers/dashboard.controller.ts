import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Public } from '../guards/public.guard';
import { CourseSummaryDto } from '../dtos/dashboards/CourseSummaryDto';
import { Class } from 'src/domain/interfaces/class.interface';
import { Course } from 'src/domain/interfaces/course.interface';
import { Model } from 'mongoose';

@Controller('dashboard')
export class DashboardController {
  constructor(
    @Inject('COURSE_MODEL')
    private courseModel: Model<Course>,
    @Inject('CLASS_MODEL')
    private classModel: Model<Class>,
  ) {}

  @Public()
  @Post('course/summary')
  @ApiBody({ type: CourseSummaryDto })
  async CourseSummary(@Body() courseSummaryDto: CourseSummaryDto) {
    return await this.courseModel.aggregate([
      {
        $match: {
          major: courseSummaryDto.major,
          enrollment: courseSummaryDto.enrollment,
        },
      },
      {
        $group: {
          _id: '$name',
          count: { $sum: 1 },
        },
      },
    ]);
  }

  @Public()
  @Post('course/avg')
  @ApiBody({ type: CourseSummaryDto })
  async AvgScoreCourse(@Body() courseSummaryDto: CourseSummaryDto) {
    return await this.courseModel.aggregate([
      {
        $match: {
          major: courseSummaryDto.major,
          enrollment: courseSummaryDto.enrollment,
        },
      },
      {
        $group: {
          _id: '$name',
          avg: { $avg: '$score' },
        },
      },
    ]);
  }
}
