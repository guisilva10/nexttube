"use client";

import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Textarea } from "@/app/_components/ui/textarea";
import { Card } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import {
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Comment, getCommentsByVideoId } from "@/data/videos";

interface CommentsSectionProps {
  videoId: string;
}

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}

function CommentItem({ comment, isReply = false }: CommentItemProps) {
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className={`flex gap-3 ${isReply ? "mt-3 ml-12" : ""}`}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={comment.authorAvatar} alt={comment.author} />
        <AvatarFallback>
          {comment.author.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{comment.author}</span>
          <span className="text-muted-foreground text-xs">
            {new Date(comment.publishedAt).toLocaleDateString("pt-BR")}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed">{comment.content}</p>
        <div className="mt-2 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 px-2"
            onClick={() => setLiked(!liked)}
          >
            <ThumbsUp className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
            <span className="text-xs">
              {liked ? comment.likes + 1 : comment.likes}
            </span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ThumbsDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
            Responder
          </Button>
        </div>
        {comment.replies && comment.replies.length > 0 && !isReply && (
          <Button
            variant="ghost"
            size="sm"
            className="text-primary mt-2 h-8 gap-1 px-2"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            <span className="text-xs font-medium">
              {comment.replies.length}{" "}
              {comment.replies.length === 1 ? "resposta" : "respostas"}
            </span>
          </Button>
        )}
        {showReplies &&
          comment.replies?.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply />
          ))}
      </div>
    </div>
  );
}

export function CommentsSection({ videoId }: CommentsSectionProps) {
  const [newComment, setNewComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const comments = getCommentsByVideoId(videoId);

  const handleSubmit = () => {
    if (newComment.trim()) {
      // Aqui você implementaria a lógica de enviar o comentário
      console.log("Novo comentário:", newComment);
      setNewComment("");
      setIsFocused(false);
    }
  };

  return (
    <div className="mt-6 w-full">
      <div className="mb-6 flex items-center gap-6">
        <h3 className="text-lg font-semibold">
          {comments.length}{" "}
          {comments.length === 1 ? "comentário" : "comentários"}
        </h3>
        <Button variant="ghost" size="sm" className="gap-1">
          <MessageSquare className="h-4 w-4" />
          Ordenar por
        </Button>
      </div>

      {/* Área de novo comentário */}
      <div className="mb-8 flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="Adicione um comentário..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="min-h-10 resize-none border-0 border-b bg-transparent px-0 py-2 focus-visible:ring-0"
          />
          {isFocused && (
            <div className="mt-3 flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setNewComment("");
                  setIsFocused(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                size="sm"
                onClick={handleSubmit}
                disabled={!newComment.trim()}
              >
                Comentar
              </Button>
            </div>
          )}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Lista de comentários */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        ) : (
          <Card className="flex flex-col items-center justify-center py-12">
            <MessageSquare className="text-muted-foreground mb-3 h-12 w-12" />
            <p className="text-muted-foreground text-sm">
              Nenhum comentário ainda. Seja o primeiro a comentar!
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

export default CommentsSection;
