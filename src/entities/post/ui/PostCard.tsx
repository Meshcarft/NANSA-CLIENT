import { Eye, MessageSquare, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    category: string;
    title: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    views: number;
    createdAt: string;
    tags: string[];
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border/40 group overflow-hidden bg-surface">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border/20">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.author.name}
              </p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MoreHorizontal size={18} />
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-[10px] uppercase font-bold tracking-wider py-0 px-2 bg-primary/5 text-primary border-primary/20"
            >
              {post.category}
            </Badge>
            <span className="text-[10px] text-muted-foreground">• {post.createdAt}</span>
          </div>
          <h3 className="text-lg font-bold text-foreground leading-snug group-hover:underline underline-offset-4 decoration-primary/30">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {post.content}
          </p>
        </div>

        {post.image && (
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/20">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-muted-foreground/60 font-medium">
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-border/40 flex items-center justify-between">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <button
              type="button"
              className="flex items-center space-x-1.5 hover:text-primary transition-colors group"
            >
              <ThumbsUp size={16} className="group-active:scale-125 transition-transform" />
              <span className="text-xs font-medium">{post.likes}</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-1.5 hover:text-primary transition-colors"
            >
              <MessageSquare size={16} />
              <span className="text-xs font-medium">{post.comments}</span>
            </button>
            <div className="flex items-center space-x-1.5 opacity-60">
              <Eye size={16} />
              <span className="text-xs font-medium">{post.views}</span>
            </div>
          </div>
          <button
            type="button"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
}
