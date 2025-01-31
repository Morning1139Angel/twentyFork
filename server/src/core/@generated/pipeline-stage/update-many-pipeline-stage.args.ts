import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineStageUpdateManyMutationInput } from './pipeline-stage-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PipelineStageWhereInput } from './pipeline-stage-where.input';

@ArgsType()
export class UpdateManyPipelineStageArgs {

    @Field(() => PipelineStageUpdateManyMutationInput, {nullable:false})
    @Type(() => PipelineStageUpdateManyMutationInput)
    data!: PipelineStageUpdateManyMutationInput;

    @Field(() => PipelineStageWhereInput, {nullable:true})
    @Type(() => PipelineStageWhereInput)
    where?: PipelineStageWhereInput;
}
