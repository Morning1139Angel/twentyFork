import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PipelineProgressableType } from '../prisma/pipeline-progressable-type.enum';
import { HideField } from '@nestjs/graphql';
import { PipelineStage } from '../pipeline-stage/pipeline-stage.model';
import { PipelineProgress } from '../pipeline-progress/pipeline-progress.model';
import { Workspace } from '../workspace/workspace.model';
import { PipelineCount } from './pipeline-count.output';

@ObjectType()
export class Pipeline {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => PipelineProgressableType, {nullable:false,defaultValue:'Company'})
    pipelineProgressableType!: keyof typeof PipelineProgressableType;

    @HideField()
    workspaceId!: string;

    @Field(() => [PipelineStage], {nullable:true})
    pipelineStages?: Array<PipelineStage>;

    @Field(() => [PipelineProgress], {nullable:true})
    pipelineProgresses?: Array<PipelineProgress>;

    @HideField()
    workspace?: Workspace;

    @HideField()
    _count?: PipelineCount;
}
