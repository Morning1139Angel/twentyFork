import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { CommentThreadTargetUncheckedUpdateManyWithoutCommentThreadNestedInput } from '../comment-thread-target/comment-thread-target-unchecked-update-many-without-comment-thread-nested.input';
import { CommentUncheckedUpdateManyWithoutCommentThreadNestedInput } from '../comment/comment-unchecked-update-many-without-comment-thread-nested.input';

@InputType()
export class CommentThreadUncheckedUpdateWithoutWorkspaceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => CommentThreadTargetUncheckedUpdateManyWithoutCommentThreadNestedInput, {nullable:true})
    commentThreadTargets?: CommentThreadTargetUncheckedUpdateManyWithoutCommentThreadNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutCommentThreadNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutCommentThreadNestedInput;
}
