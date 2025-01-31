import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineProgressableType } from '../prisma/pipeline-progressable-type.enum';
import { PipelineProgressCreateNestedManyWithoutPipelineInput } from '../pipeline-progress/pipeline-progress-create-nested-many-without-pipeline.input';
import { WorkspaceCreateNestedOneWithoutPipelinesInput } from '../workspace/workspace-create-nested-one-without-pipelines.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PipelineCreateWithoutPipelineStagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => PipelineProgressableType, {nullable:true})
    pipelineProgressableType?: keyof typeof PipelineProgressableType;

    @Field(() => PipelineProgressCreateNestedManyWithoutPipelineInput, {nullable:true})
    pipelineProgresses?: PipelineProgressCreateNestedManyWithoutPipelineInput;

    @HideField()
    workspace!: WorkspaceCreateNestedOneWithoutPipelinesInput;
}
